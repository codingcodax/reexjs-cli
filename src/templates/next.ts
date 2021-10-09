const next = {
  app: '',
  ts: {
    page: "import { NextPage } from 'next';\n\nconst TITLE: NextPage = () => {\n  return (\n    <section>\n      <p>TITLE Page Component</p>\n    </section>\n    );\n};\n\nexport default TITLE;",
    pageChakra:
      "import { NextPage } from 'next';\nimport { Box, Text } from '@chakra-ui/layout'\n\nconst TITLE: NextPage = () => {\n  return (\n    <section>\n      <p>TITLE Page Component</p>\n    </section>\n    );\n};\n\nexport default TITLE;",
  },
};

export default next;
