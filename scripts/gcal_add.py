#!/usr/bin/env python3
"""
Create a Google Calendar event with explicit visibility and attendees.

Uses the OAuth credentials already saved by gcalcli at
~/Library/Application Support/gcalcli/oauth (pickle format).

Usage:
  gcal_add.py --title "제목" --start "2026-04-22T15:00" --end "2026-04-22T16:00" [--private] [--calendar "sung@brain-crew.com"] [--location "장소"] [--description "내용"] [--tz "Asia/Seoul"] [--attendees "email1@example.com,email2@example.com"]

Required: --title, --start, --end
--private sets visibility=private (default: not set → inherits calendar default)
--attendees comma-separated email list (optional)
"""
import argparse, pickle, sys, json, os

OAUTH_PATH = os.path.expanduser("~/Library/Application Support/gcalcli/oauth")

def main():
    p = argparse.ArgumentParser()
    p.add_argument("--title", required=True)
    p.add_argument("--start", required=True, help="ISO datetime, e.g. 2026-04-22T15:00 (no TZ; combined with --tz)")
    p.add_argument("--end", required=True)
    p.add_argument("--tz", default="Asia/Seoul")
    p.add_argument("--calendar", default="sung@brain-crew.com")
    p.add_argument("--location", default=None)
    p.add_argument("--description", default=None)
    p.add_argument("--private", action="store_true", help="Set visibility=private")
    p.add_argument("--attendees", default=None, help="Comma-separated email list")
    p.add_argument("--allday", action="store_true")
    args = p.parse_args()

    from googleapiclient.discovery import build
    with open(OAUTH_PATH, "rb") as f:
        creds = pickle.load(f)
    svc = build("calendar", "v3", credentials=creds)

    def pad_dt(s):
        # Ensure YYYY-MM-DDTHH:MM:SS
        if "T" in s:
            date, t = s.split("T", 1)
            parts = t.split(":")
            if len(parts) == 2:
                return f"{date}T{t}:00"
        return s

    if args.allday:
        body_time = {"start": {"date": args.start}, "end": {"date": args.end}}
    else:
        body_time = {
            "start": {"dateTime": pad_dt(args.start), "timeZone": args.tz},
            "end":   {"dateTime": pad_dt(args.end),   "timeZone": args.tz},
        }

    body = {"summary": args.title, **body_time}
    if args.location:    body["location"] = args.location
    if args.description: body["description"] = args.description
    if args.private:     body["visibility"] = "private"
    if args.attendees:
        attendees_list = [email.strip() for email in args.attendees.split(",")]
        body["attendees"] = [{"email": email} for email in attendees_list]

    created = svc.events().insert(calendarId=args.calendar, body=body, sendUpdates="all").execute()
    print(json.dumps({
        "id": created["id"],
        "visibility": created.get("visibility", "default"),
        "htmlLink": created.get("htmlLink"),
        "summary": created.get("summary"),
        "start": created.get("start"),
        "end": created.get("end"),
        "attendees": created.get("attendees", []),
    }, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
