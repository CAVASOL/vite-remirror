import React, { useCallback } from "react";
import { useHelpers, useRemirrorContext, useKeymap } from "@remirror/react";
import { SocialEditor } from "@remirror/react-editors/social";

const ALL_USERS = [
  { id: "joe", label: "Joe" },
  { id: "sue", label: "Sue" },
  { id: "pat", label: "Pat" },
  { id: "tom", label: "Tom" },
  { id: "jim", label: "Jim" },
  { id: "sol", label: "Sol" },
];

// take tags somewhere and restore them to the editor

const TAGS = ["editor", "remirror", "opensource", "prosemirror", "whatever"];

const SAMPLE_DOC = {
  type: "doc",
  content: [
    {
      type: "paragraph",
      attrs: { dir: null, ignoreBidiAutoUpdate: null },
      content: [{ type: "text", text: "Loaded content" }],
    },
  ],
};

function LoadButton() {
  const { setContent } = useRemirrorContext();
  const handleClick = useCallback(() => setContent(SAMPLE_DOC), [setContent]);

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
    >
      Load
    </button>
  );
}

function SaveButton() {
  const { getJSON } = useHelpers();
  const handleClick = useCallback(
    () => alert(JSON.stringify(getJSON())),
    [getJSON]
  );

  return (
    <button
      onMouseDown={(event) => event.preventDefault()}
      onClick={handleClick}
    >
      Save
    </button>
  );
}

const Basic: React.FC = () => {
  return (
    <SocialEditor
      placeholder="Mention @joe or add #remirror"
      users={ALL_USERS}
      tags={TAGS}
    >
      <LoadButton />
      <SaveButton />
    </SocialEditor>
  );
};

export default Basic;

// import { Remirror, ThemeProvider, Toolbar, useRemirror } from "@remirror/react";
// import { AllStyledComponent } from "@remirror/styles/emotion";
// import {
//   BoldExtension,
//   HeadingExtension,
//   ItalicExtension,
//   UnderlineExtension,
// } from "remirror/extensions";

// import {
//   BasicFormattingButtonGroup,
//   DataTransferButtonGroup,
//   HeadingLevelButtonGroup,
//   HistoryButtonGroup,
//   VerticalDivider,
// } from "@remirror/react";

// const extensions = () => [
//   new HeadingExtension(),
//   new BoldExtension(),
//   new ItalicExtension(),
//   new UnderlineExtension(),
// ];

// function EditorToolbar() {
//   return (
//     <Toolbar>
//       <HistoryButtonGroup />
//       <VerticalDivider />
//       <DataTransferButtonGroup />
//       <VerticalDivider />
//       <HeadingLevelButtonGroup />
//       <VerticalDivider />
//       <BasicFormattingButtonGroup />
//       <VerticalDivider />
//     </Toolbar>
//   );
// }

// export default function Editor() {
//   const { manager, state } = useRemirror({
//     extensions,
//     content: "<p><u>Hello</u> there <b>friend</b> and <em>partner</em>.</p>",
//     selection: "end",
//     stringHandler: "html",
//   });
//   return (
//     <AllStyledComponent>
//       <ThemeProvider>
//         <Remirror
//           manager={manager}
//           initialContent={state}
//           autoFocus
//           autoRender="end"
//         >
//           <EditorToolbar />
//         </Remirror>
//       </ThemeProvider>
//     </AllStyledComponent>
//   );
// }
