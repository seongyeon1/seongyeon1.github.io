const Paper = ({
  title,
  authors,
  year,
  venue,
  arxiv,
  github,
}: {
  title: string;
  authors: string | string[];
  year: number;
  venue?: string;
  arxiv?: string;
  github?: string;
}) => {
  const authorStr = Array.isArray(authors) ? authors.join(", ") : authors;

  return (
    <div className="my-6 rounded-lg border border-gray-200 bg-gray-50 p-5 dark:border-gray-700 dark:bg-gray-800/50">
      <h3 className="mt-0 text-lg font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mb-2 text-sm text-gray-600 dark:text-gray-400">
        {authorStr} ({year})
        {venue && <span className="ml-1">- {venue}</span>}
      </p>
      <div className="flex gap-3 text-sm">
        {arxiv && (
          <a
            href={`https://arxiv.org/abs/${arxiv}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            arXiv
          </a>
        )}
        {github && (
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default Paper;
