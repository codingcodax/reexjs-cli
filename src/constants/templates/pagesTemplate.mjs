const pagesTemplate = (title) =>
    `const ${title} = () => {\n  return (\n    <section>\n      <p>${title} Page Component</p>\n    </section>\n    );\n};\n\nexport default ${title};`;

export default pagesTemplate;
