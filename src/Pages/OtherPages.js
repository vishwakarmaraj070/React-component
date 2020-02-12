import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "../component/Dropdown";
import Modal from "../component/Modal";
import Button from "../component/Button";
import Checkbox from "../component/Checkbox";
import Notification from "../component/Notification";
import { Pagination, PageItem, PageLink } from "../component/Pagination";
import Progress from "../component/ProgressBar";
import DragAndDrop from "../component/DragAndDrop/Index";
import { Stepper, Step } from "../component/Stepper";
import Alert from "../component/Alert";
import ImportProgress from "../component/ImportProgress";
import Captcha from "../component/Captcha";
import { Tabs, Tab } from "../component/Tabs";

const OtherPages = props => {
  const [open, setOpen] = useState(false);
  const [openNo, setOpenNo] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [activePage, setActivePage] = useState(1);
  const [activeStep, setActiveStep] = useState(1);
  const [openAlert, setAlert] = useState(false);

  let progress = 0;
  let progressId;

  const handleUpload = (e, files) => {
    console.log(e);
    console.log(files);
    progressId = setInterval(() => {
      if (progress !== 100) {
        progress += 1;
        setUploadProgress(progress);
      } else {
        clearInterval(progressId);
      }
    }, 50);
  };

  return (
    <div>
      <div>
        <Captcha />
        <pre className="how-to">{`<Captcha onClick={(e, isValid)=>console.log(isValid)} />`}</pre>
      </div>
      <div style={{ margin: "20px 0" }}>
        <ImportProgress
          progress={40}
          totalProgress={"20"}
          inQueue={"3"}
          uploadingFiles={"5"}
        />
        <pre className="how-to">{`<ImportProgress
          progress={40}
          totalProgress={22}
          inQueue={3}
          uploadingFiles={5}/>`}</pre>
      </div>
      <div style={{ margin: "20px 0" }}>
        <Alert open={openAlert} isOpen={setAlert}>
          Alert Message should be here
        </Alert>
        <pre className="how-to">{`<Alert open={bool} isOpen={toggleFunc}>
          Alert Message should be here
        </Alert>`}</pre>
        <Button size="sm" onClick={() => setAlert(true)}>
          Alert
        </Button>
      </div>
      <div>
        <Stepper activePage={activePage} id="stepper1">
          <Step>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <Button onClick={() => setActivePage(2)}>Next</Button>
          </Step>
          <Step>
            this is second
            <div>
              <Button onClick={() => setActivePage(1)}>Previous</Button>
              <Button onClick={() => setActivePage(3)}>Next</Button>
            </div>
          </Step>
          <Step>
            this is thierd
            <div>
              <Button onClick={() => setActivePage(2)}>Previous</Button>
              <Button onClick={() => setActivePage(4)}>Next</Button>
            </div>
          </Step>
          <Step>
            this is fourth
            <div>
              <Button onClick={() => setActivePage(1)}>Step 1</Button>
              <Button>finish</Button>
            </div>
          </Step>
        </Stepper>
        <pre className="how-to">{`<Stepper activePage={activePage} id="stepper1" vertical={false}>
          <Step>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <Button onClick={() => setActivePage(2)}>Next</Button>
          </Step>
          <Step>
            this is second
            <div>
              <Button onClick={() => setActivePage(1)}>Previous</Button>
              <Button onClick={() => finishFunc}>Finish</Button>
            </div>
          </Step>
        </Stepper>`}</pre>
      </div>
      <div style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Stepper
          id={"stepper2"}
          activePage={activeStep}
          vertical
          color="secondary"
        >
          <Step>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <p>this is dfhk</p>
            <Button onClick={() => setActiveStep(2)}>Next</Button>
          </Step>
          <Step>
            this is second
            <div>
              <Button onClick={() => setActiveStep(1)}>Previous</Button>
              <Button onClick={() => setActiveStep(3)}>Next</Button>
            </div>
          </Step>
          <Step>
            this is thierd
            <div>
              <Button onClick={() => setActiveStep(2)}>Previous</Button>
              <Button onClick={() => setActiveStep(4)}>Next</Button>
            </div>
          </Step>
          <Step>
            this is fourth
            <div>
              <Button onClick={() => setActiveStep(1)}>Step 1</Button>
              <Button>finish</Button>
            </div>
          </Step>
        </Stepper>
      </div>
      <div>
        <Progress value={20} className="mb-2">
          {20}%
        </Progress>
        <Progress value={50} color="primary" className="mb-2">
          50%
        </Progress>
        <Progress value={80} color="danger" height="10px" className="mb-2" />

        <pre className="how-to">{`<Progress value={50} color="primary" height="to set height">
          50%
        </Progress>`}</pre>
      </div>
      <div>
        <h3>Dran and Drop</h3>
        <DragAndDrop progressValue={uploadProgress} onClick={handleUpload} />
        <pre className="how-to">{`<DragAndDrop progressValue={progress value} onClick={(e, files)=> console.log(files)} />`}</pre>
      </div>
      <div>
        <h3>Pagination</h3>
        <Pagination circle color="secondary">
          <PageItem disabled>
            <PageLink>previos</PageLink>
          </PageItem>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <PageItem active={item === 2} key={item}>
              <PageLink>{item}</PageLink>
            </PageItem>
          ))}
          <PageItem>
            <PageLink>Next</PageLink>
          </PageItem>
        </Pagination>
        {/*  */}
        <Pagination>
          <PageItem disabled>
            <PageLink>previos</PageLink>
          </PageItem>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <PageItem active={item === 2} key={item}>
              <PageLink>{item}</PageLink>
            </PageItem>
          ))}
          <PageItem>
            <PageLink>Next</PageLink>
          </PageItem>
        </Pagination>

        <pre className="how-to">{`<Pagination>
          <PageItem disabled>
            <PageLink>previos</PageLink>
          </PageItem>
          {[1, 2, 3, 4, 5, 6].map(item => (
            <PageItem active={item === 2} key={item}>
              <PageLink>{item}</PageLink>
            </PageItem>
          ))}
          <PageItem>
            <PageLink>Next</PageLink>
          </PageItem>
        </Pagination>`}</pre>
      </div>
      <div>
        <h3>Notification</h3>
        <Button flat onClick={() => setOpenNo(true)}>
          Notification
        </Button>
        <pre className="how-to">{`<Notification show={bool} toggle={toggleFunc}>
          <div>djflkdrsj</div>
          <p>hfeyuftuhioduo </p>
        </Notification>`}</pre>

        <Notification show={openNo} toggle={setOpenNo}>
          <div>djflkdrsj</div>
          <p>hfeyuftuhioduo </p>
        </Notification>
      </div>
      <div>
        <h3>Modal</h3>
        <Button onClick={() => setOpen(true)}>Modal Open</Button>
        <Modal open={open}>
          <div>Modal body content here</div>
          <Checkbox label="lable" id="check" modal />
          <div>
            <Button flat size="sm" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </Modal>
        <pre className="how-to">{`<Modal open={bool}>
          <div>Modal body content here</div>
          <Checkbox label="lable" id="check" modal />
          <div>
            <Button flat size="sm" onClick={toggleFunc}>
              Close
            </Button>
          </div>
        </Modal>`}</pre>
      </div>
      <div>
        <h3>Dropdown</h3>
        <Dropdown menu="menu name">
          {["action1", "action1", "action1"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Dropdown>

        <Dropdown menu="menu name" color="secondary">
          {["action1", "action1", "action1"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Dropdown>

        <pre className="how-to">{`<Dropdown menu="menu name">
          {["action1", "action1", "action1"].map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </Dropdown>`}</pre>
      </div>
      <div>
        <h3>Tabs</h3>
        <Tabs>
          <Tab>My Account</Tab>
          <Tab>My Account</Tab>
        </Tabs>
        {/* <Tab items={["home", "Services"]} />
        <Tab items={["home2", "Services2", "Contact"]} color="secondary" /> */}
        <pre className="how-to">{`<Tab items={["home", "Services"]} />`}</pre>
      </div>
    </div>
  );
};

OtherPages.propTypes = {};

export default OtherPages;
