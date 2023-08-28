export default function ProjectInfo({curInfo, verticalMode}) {
    return (
    <>
    <section id="project-info">
        <div className="separator"></div>
        <div className={`center-wrapper ${verticalMode ? "" : "thin"}`}>
            {curInfo}
        </div>
    </section>
    </>
    );
}