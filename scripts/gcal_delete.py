#!/usr/bin/env python3
"""Delete Google Calendar events by exact summary match, within a date range."""
import argparse, pickle, os, sys
OAUTH = os.path.expanduser("~/Library/Application Support/gcalcli/oauth")
p = argparse.ArgumentParser()
p.add_argument("--calendar", default="sung@brain-crew.com")
p.add_argument("--title", required=True, help="exact summary to match")
p.add_argument("--from", dest="dfrom", required=True)
p.add_argument("--to", dest="dto", required=True)
a = p.parse_args()
from googleapiclient.discovery import build
with open(OAUTH,"rb") as f: creds = pickle.load(f)
svc = build("calendar","v3",credentials=creds)
r = svc.events().list(calendarId=a.calendar, timeMin=a.dfrom+"T00:00:00Z", timeMax=a.dto+"T23:59:59Z", singleEvents=True).execute()
n=0
for e in r.get("items",[]):
    if e.get("summary")==a.title:
        svc.events().delete(calendarId=a.calendar, eventId=e["id"]).execute()
        n+=1
print(f"deleted {n}")
