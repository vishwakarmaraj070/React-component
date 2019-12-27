import React, { useState } from "react";
import Button from "./component/Button";
import Checkbox from "./component/Checkbox";
import Radio from "./component/Radio";
import Pagination from "./component/Pagination";
import PageItem from "./component/Pagination/PageItem";
import PageLink from "./component/Pagination/PageLink";
import Notification from "./component/Notification";
import Input from "./component/Input";
import PhoneNumber from "./component/PhoneNumber";
import MobileNumber from "./component/Mobile.js";
import NumberField from "./component/NumberField";

function App() {
  const [notification, setNotification] = useState(false);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6" style={{ margin: "100px" }}>
            <form className="r-form">
              <div style={{ marginTop: "20px" }}>
                <NumberField
                  placeholder="Amount field without decimal"
                  pattern="^[1-9]\d*$"
                  maxLength={14}
                />

                <Input
                  placeholder="Percentage field"
                  pattern="^[1-9]([\d]{1,3})?(\.\d{1,2})?\%$"
                  maxLength={7}
                />

                <NumberField
                  placeholder="Amount field with decimal"
                  pattern="^[1-9]\d*(\.\d{2})$"
                  maxLength={16}
                />

                <Input
                  placeholder="IFSC code Field"
                  pattern="[A-Z]{4}[0][A-Z0-9]{6}"
                  exact={11}
                  patternMsg="4 Uppercase Character, followed by 0, followed by 6 number or char "
                />

                <Input
                  placeholder="TAN Field"
                  pattern="[A-Z]{4}[0-9]{5}[A-Z]"
                  exact={10}
                />

                <Input
                  placeholder="GSTIN Field"
                  pattern="[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]{3}"
                />
                <Input
                  placeholder="PAN Field"
                  pattern="[A-Z]{3}[I|P|S]{1}[0-9]{5}[A-Z]"
                  exact={10}
                />

                <Input placeholder="cin field" pattern="^[A-Z0-9]{21}$" />

                <Input placeholder="LLP field" pattern="^[A-Z0-9-]{8}$" />
                <NumberField
                  placeholder="Pin code number for india"
                  pattern="^[\d]{6}$"
                  exact={6}
                />
                <NumberField
                  placeholder="Pin code number for outside"
                  pattern="^[\d]{8,}$"
                  patternMsg="minmum 8 number required without any special char"
                />

                <Input
                  placeholder="bank Account number field"
                  pattern="[a-zA-Z0-9]([/-]?(((\d*[1-9]\d*)*[a-zA-Z/-])|(\d*[1-9]\d*[a-zA-Z]*))+)*[0-9]*"
                />

                <Input
                  placeholder="no special char"
                  noSpecialChar
                  maxLength={5}
                  onChange={e => console.log(e.keyCode)}
                />

                <Input placeholder="exact length" exact={5} />

                <NumberField
                  placeholder={"exact length with number field"}
                  exact={5}
                />
                <NumberField
                  placeholder={"max length with number field"}
                  maxLength={5}
                />

                {/* phone number */}
                <PhoneNumber onChange={value => console.log(value)} />

                {/* mobile validation */}
                <MobileNumber />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Button>Save</Button>
                <Button outline>Save</Button>
                <Button pulse>Save</Button>
                <Button pulse outline>
                  Save
                </Button>
              </div>

              <div>
                <Checkbox label="checkbox" id="check1" />
                <Checkbox
                  label="checkbox"
                  color="danger"
                  id="check2"
                  labelLeft
                />
              </div>
              <div style={{ marginTop: "20px" }}>
                <Radio label="Radio1" name="radio" />
                <Radio label="Radio2" labelLeft color="danger" name="radio" />
              </div>
              <div style={{ marginTop: "20px" }}>
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
              </div>
              <div>
                <Button onClick={() => setNotification(true)} flat>
                  Notification
                </Button>
                <Notification
                  color="danger"
                  show={notification}
                  toggle={setNotification}
                >
                  this is the notification msg
                </Notification>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
