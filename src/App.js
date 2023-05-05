import { useState } from "react";
import JoditEditor from "jodit-react";

function App() {
  const [videoFile, setvideoFile] = useState();
  const [text, setText] = useState();
  const [videoText, setVideotext] = useState();

  const handleChnage = () => {
    setVideotext({ __html: text });
  };
  return (
    <div className="container my-4">
      <div className="mb-3 col-4">
        <input
          className="form-control"
          type="file"
          id="formFile"
          accept="video/*"
          onChange={(e) => {
            setvideoFile(URL.createObjectURL(e.target.files[0]));
          }}
        />
      </div>
      <div className="video-container">
        <video
          controls
          loop
          id="bgVideo"
          className="player-elements"
          src={videoFile}
        ></video>

        <p className="hello-world" dangerouslySetInnerHTML={videoText} />
      </div>

      <div className="col-4">
        <label htmlFor="Video Text" className="visually-hidden">
          Video Text
        </label>
        <JoditEditor
          onBlur={(text) => {
            setText(text);
          }} // preferred to use only this option to update the content for performance reasons
          onChange={(e) => setText(e.target?.value)}
        ></JoditEditor>
      </div>
      <div className="col-2 my-2">
        <button
          type="submit"
          className="btn btn-primary mb-3"
          onClick={() => handleChnage()}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
