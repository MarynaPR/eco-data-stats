import React from 'react';
import reportImg from "../../assets/cover/report.png";
function Software() {


    return (
        <section>
            <h3> See EcoDataStats Live</h3>
            <br />
            <p>Interact with live dashboards in our gallery</p>
            {/* <p><a href="https://app.powerbi.com/links/SfvIwN5wjL?ctid=9cce8368-101c-4cb9-b1c6-20c964379df1&pbi_source=linkShare">View live Dashbord Gallery >> </a></p> */}
            <div className="powerBi">
                <iframe title="portal" width="600" height="373.5" src="https://app.powerbi.com/view?r=eyJrIjoiYzFlZTg5NTgtOWVmMS00NDZjLTkwY2UtMjEyM2U5YjZhNWViIiwidCI6IjljY2U4MzY4LTEwMWMtNGNiOS1iMWM2LTIwYzk2NDM3OWRmMSIsImMiOjN9" frameborder="0" allowFullScreen="true"></iframe>
            </div>

            {/* <img src={reportImg} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
        </section>
    );
};

export default Software;