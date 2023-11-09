export default function Editor({data, setData}) {
  return (
    <div className="editorWrap">
      <div className="toolbar">
        <p>Editor</p>
      </div>
      <textarea 
        id="editor"
        name="editor"
        type="text"
        value={data ?? ''}
        onChange={(e) => setData(e.target.value)}
        />
    </div>
  );
}