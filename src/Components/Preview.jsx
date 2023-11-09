import {marked} from "marked";
import DOMPurify from "dompurify";

export default function Preview({data}) {
  marked.use({
    breaks: true,
  });
  const sanitize = DOMPurify.sanitize(marked(data));
  
  return(
    <div className="previewWrap">
      <div className="toolbar">
        <p>Preview</p>
      </div>
      <div
        id="preview"
        dangerouslySetInnerHTML={{__html: sanitize}}
        >
      </div>
    </div>
  );
}