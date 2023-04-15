const { default: Link } = require('next/link');

const fetchRepoContents = async (name) => {
  // make it 3s delayed to test suspense boundary
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/Yodkwtf-Academy/${name}/contents`
  );
  const contents = await response.json();
  return contents;
};

const RepoDir = async ({ name }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.name}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDir;
