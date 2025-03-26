import "@/styles/public/preview-story.scss";

const PreviewStoryPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="preview-story">
      <div className="container">{children}</div>
    </div>
  );
};

export default PreviewStoryPage;
