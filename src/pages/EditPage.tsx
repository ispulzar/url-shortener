import EditLinksModel from "./components/EditLinksModel";
import useWindowWidth from "./components/hooks/useWindowWidth";
import Preview from "./components/Preview";

function EditPage() {
  const [windowWidth] = useWindowWidth();

  return (
    <div className="editpage">
      <EditLinksModel />

      {windowWidth >= 800 ? <Preview /> : <></>}
    </div>
  );
}

export default EditPage;
