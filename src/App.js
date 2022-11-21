import { useState } from "react";
import { marked } from "marked";
import "./App.css";

//a header (H1 size), a sub header (H2 size), a link,
//inline code, a code block, a list item, a blockquote,
//an image, and bolded text

function App() {
  const [text, setText] = useState(`
  # Header Text
  ## Subheader Text
  [Example Link](https://www.example.com)
  \`code\`
  \`\`\`
  {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25
  }
  \`\`\`
  1. First item
2. Second item
3. Third item
> blockquote
![alt text](https://images.pexels.com/photos/162140/duckling-birds-yellow-fluffy-162140.jpeg)
**bold text**
  `);

  marked.setOptions({
    breaks: true,
  });
  return (
    <div className="App" id="App">
      <div id="editorWrap">
        <div class="toolbar">Editor</div>
        <textarea
          id="editor"
          onChange={(event) => {
            setText(event.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      <div class="previewWrap">
        <div class="toolbar">Preview</div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(text) }}
        ></div>
      </div>
    </div>
  );
}

export default App;
