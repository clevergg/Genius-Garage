export const extractHeadings = (content) => {
  const headings = content.split('\n')
    .filter(line => line.startsWith('#'))
    .map(line => ({
      level: line.match(/^#+/)?.[0].length || 1,
      text: line.replace(/^#+\s*/, '').trim()
    }));
  return headings;
};

export const renderContent = (content) => {
  let processedContent = content;
  
  // Process headings with IDs
  const headings = extractHeadings(content);
  headings.forEach(heading => {
    const id = heading.text.replace(/\s+/g, '-').toLowerCase();
    const headingMark = '#'.repeat(heading.level);
    processedContent = processedContent.replace(
      `${headingMark} ${heading.text}`,
      `${headingMark} <span id="${id}">${heading.text}</span>`
    );
  });

  // Process code blocks with HTML
  processedContent = processedContent.replace(
    /```html([\s\S]*?)```/g,
    (_, code) => `<pre class="code-block html"><code>${
      code.trim()
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
    }</code></pre>`
  );

  // Process other code blocks
  processedContent = processedContent.replace(
    /```(\w+)?([\s\S]*?)```/g,
    (_, lang, code) => `<pre class="code-block ${lang || ''}"><code>${code.trim()}</code></pre>`
  );

  // Process inline code
  processedContent = processedContent.replace(
    /`([^`]+)`/g,
    '<code class="inline-code">$1</code>'
  );

  // Process links [text](url)
  processedContent = processedContent.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>'
  );

  return processedContent;
};