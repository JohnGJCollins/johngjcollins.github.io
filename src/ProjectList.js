export default function ProjectList({curState, verticalMode}) {
    return (
    <>
    <section id="project-list">
        <div className="separator"></div>
        <div className={`center-wrapper plist ${verticalMode ? "" : "thin"}`}>
            <ProjectIcons curState={curState} verticalMode={verticalMode}/>
        </div>
    </section>
    </>
    );
}

function ProjectIcons({curState, verticalMode}) {
    let table = (<div id="project-table" className={verticalMode ? "" : "thin"}>
        {Object.keys(curState.projDataList).map(projectKey => {
            let projectData = curState.projDataList[projectKey];
            
            return (
            <div className="project-icon-wrapper" onPointerDown={e => {
                curState.projNum = projectKey;
                }} key={projectKey}>
                <div className="project-title">{projectData.title}</div>
                <a href="#project-info" className="image-link"><img className={`project-image ${verticalMode ? "" : "thin"}`} src={projectData.imgsrc} alt={projectData.title + " icon"} /></a>
            </div>);
        })}
    </div>);

    return table;
}