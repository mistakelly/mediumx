import "@/styles/private/new_story.scss";
import ShowMoreSvg from "../svg/ShowMoreSvg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { BASEURL } from "@/constants";
import axios from "axios";
import CancelSvg from "../svg/CancelSvg";

export const NewStory = () => {
  const [storyData, setStoryData] = useState({
    title: "",
    subTitle: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setStoryData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="new-story">
      <NewStoryHeader
        title={storyData.title}
        subTitle={storyData.subTitle}
        content={storyData.content}
      />
      <div className="editor" style={{ width: "60%" }}>
        <div className="editor__header">
          <input
            type="text"
            placeholder="Title"
            className="editor__header-title"
            value={storyData.title}
            onChange={handleChange}
            name="title"
          />
          <input
            type="text"
            className="editor__header-sub-title"
            placeholder="Tell your story"
            value={storyData.subTitle}
            onChange={handleChange}
            name="subTitle"
          ></input>
        </div>

        <div className="editor__body">
          <textarea
            className="editor__body-textarea"
            value={storyData.content}
            onChange={handleChange}
            name="content"
            placeholder="content"
          ></textarea>
        </div>
      </div>
    </section>
  );
};

const NewStoryHeader = ({
  title,
  subTitle,
  content,
}: {
  title: string;
  subTitle: string;
  content: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<string | Blob>("");
  const [imagePreview, setImgPreview] = useState<string | null>(null);
  const [changeUrl, setChangeUrl] = useState<boolean>(false);

  const handlePublish = (): boolean => {
    if (!selectedFile) {
      alert("Please use the 'add image' button to select a story image");

      setChangeUrl(false);
      return false;
    }

    if (!title || !subTitle || !content) {
      alert(
        'please make sure any of these are not empty "title",  "subtitle" and "content"'
      );

      setChangeUrl(false);
      return false;
    }

    setChangeUrl(true);
    return true;
  };

  const addImage = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
    console.log("add image");
  };

  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files;

    if (file) {
      setSelectedFile(file[0]);
      const imgUrl = URL.createObjectURL(file[0]);
      setImgPreview(imgUrl);
    }
  };
  return (
    <>
      <div className="new-story__header">
        <div className="new-story__header-left">
          <Link to={"/home"}>
            <h1>MEDIUMX</h1>
          </Link>
          <p>saving...</p>
        </div>

        <div className="new-story__header-right">
          {/* {changeUrl && ( */}
          <Link to={changeUrl ? "/story-preview" : "/new-story"}>
            <button onClick={handlePublish}>publish</button>
          </Link>
          {/* // )} */}
          <button onClick={addImage} style={{ background: "blue" }}>
            addImge
          </button>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            style={{ display: "none" }}
            onChange={handleImgChange}
          />
          <div>
            <ShowMoreSvg />
          </div>
          <div className="new-story__header-profile">
            <img src="/assets/images/test_img.png" alt="profile-img" />
          </div>
        </div>
      </div>

      <div style={{ width: "10rem" }}>
        {imagePreview && (
          <>
            <img src={imagePreview} alt="" style={{ marginBottom: "3rem" }} />
          </>
        )}
      </div>
    </>
  );
};

export const StoryPreview = () => {
  const categoryInputRef = useRef<HTMLDivElement>(null);

  const choosedCategory: string[] = [];

  const handleOnkeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!categoryInputRef.current) return;

    if (e.key === "Enter") {
      const text = categoryInputRef.current.innerText

      // console.log(categoryInputRef.current.innerText);
      const splitText = text.split(' ')


      const button = document.createElement('button')

      button.innerText = splitText[0].trim()
      button.contentEditable = 'false'
      categoryInputRef.current.contentEditable = "true";


      categoryInputRef.current.innerText = ''
      categoryInputRef.current.appendChild(button)


      console.log('buttt', button)

      console.log('splitText', splitText)
    }
  };

  return (
    <section className="story-preview">
      <div className="story-preview__header">
        <div className="div"></div>
        <CancelSvg />
      </div>

      <div className="story-preview__body">
        <div className="story-preview__body-left">
          <h2>Story Preview</h2>
          <div className="left-img-div">
            <span>
              Include a high-quality image in your story to make it more
              inviting to readers.
            </span>
            <img src="/assets/images/test_img.png" alt="profile-img" />
          </div>
          <div className="div">
            <h1>How I became a millionare</h1>
          </div>
          <p>How do you think has the most money in the world</p>
          <p>
            <span>Note:</span> Changes here will affect how your story appears
            in public places like Mediumx homepage and in subscribers’ inboxes —
            not the contents of the story itself.
          </p>
        </div>

        <div className="story-preview__body-right">
          <p>
            Publishing to: <span>kelly</span>
          </p>

          <p>
            Add or change topics (up to 5) so readers know what your story is
            about
          </p>

          <div
            contentEditable={true}
            className="category-input"
            ref={categoryInputRef}
            onKeyDown={(e) => handleOnkeyDown(e)}
          />

          <div className="checkbox">
            <input type="checkbox" />

            <p>
              <span style={{ fontWeight: "bold", fontSize: "1.3rem" }}>
                Send a link to your email subscribers
              </span>{" "}
              <br />
              It is only sent to readers who have opted to receive your stories
              via email, not to all followers.
            </p>
          </div>

          <div className="cta">
            <button>Publish</button>
            {/* <p>schedule for later</p> */}
          </div>
        </div>
      </div>
    </section>
  );
};
