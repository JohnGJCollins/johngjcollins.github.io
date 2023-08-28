export default function Credits({verticalMode}) {
    return (
    <section id="credits">
        <div className="separator"></div>
        <div className={`center-wrapper ${verticalMode ? "" : "thin"}`}>
            <table id="credits-table">
                <tbody>
                    <tr className="credit-row">
                        <td className="credit-entry">
                            <a href="https://icons8.com/icon/4Z2nCrz5iPY2/github">GitHub</a> icon by <a href="https://icons8.com">Icons8</a>
                        </td>
                        <td className="credit-entry">
                            <a href="https://icons8.com/icon/8808/linkedin">LinkedIn</a> icon by <a href="https://icons8.com">Icons8</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
    );
}