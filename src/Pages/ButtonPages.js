import React from "react";
import PropTypes from "prop-types";
import Button from "../component/Button";
import SwitchButton from "../component/SwitchButton";
import Checkbox from "../component/Checkbox";
import Radio from "../component/Radio";
import Badge from "../component/Badge";
import IconButton from "../component/IconButton";

const ButtonPages = props => {
  return (
    <>
      <div>
        <h3>badges color</h3>
        <Badge>primary</Badge>
        <Badge color="secondary">
          secondary <i>i</i>
        </Badge>
        <Badge color="danger">
          <a href="/">danger</a>
        </Badge>
        <Badge color="close">Close</Badge>
        <Badge color="purple">purple</Badge>
        <pre className="how-to">{`<Badge color="close">Close</Badge>`}</pre>
        <h3>badges editable color</h3>
        <Badge contentEditable>primary</Badge>
        <Badge contentEditable color="secondary">
          secondary
        </Badge>
        <Badge contentEditable color="danger">
          <a href="/">danger</a>
        </Badge>
        <Badge contentEditable color="close">
          Close
        </Badge>
        <Badge contentEditable color="purple">
          purple
        </Badge>
        <pre className="how-to">{`<Badge contentEditable >Close</Badge>`}</pre>
      </div>
      <div>
        <h3>badges</h3>
        <Badge>badge</Badge>
        <Badge contentEditable>Editable</Badge>
        <Badge>
          badge icon <i>i</i>
        </Badge>
        <Badge>
          <a href="/">link</a>
        </Badge>
        <pre className="how-to">{`<Badge ><a href="/">link</a></Badge>`}</pre>
      </div>
      <div>
        <h3>Radio color</h3>
        <Radio label="primary" name="radio" />
        <Radio label="secondary" color="secondary" name="radio" small />
        <Radio label="danger" name="radio" color="danger" />
        <Radio label="close" name="radio" color="close" />
        <Radio label="purple" name="radio" color="purple" />
        <pre className="how-to">{`<Radio label="danger" name="radio" color="danger" />`}</pre>
      </div>
      <div>
        <h3>Checkbox color</h3>
        <Checkbox label="primary" id="primary" />
        <Checkbox label="indeterminate" indeterminate={true} />

        <Checkbox label="secondary" small color="secondary" />
        <Checkbox label="danger" color="danger" />
        <Checkbox label="close" color="close" />
        <Checkbox label="purple" color="purple" />
        <pre className="how-to">{`<Checkbox label="secondary" color="secondary" />`}</pre>
      </div>
      <div>
        <h3>Switch button color</h3>
        <SwitchButton />
        <SwitchButton color="secondary" />
        <SwitchButton color="danger" />
        <SwitchButton color="close" />
        <SwitchButton color="purple" />
        <pre className="how-to">{` <SwitchButton color="secondary" />`}</pre>
      </div>

      {/* size */}

      <div>
        <h3>Icon Button Size</h3>
        <IconButton size="lg">&#x2624;</IconButton>
        <IconButton>&#x2624;</IconButton>
        <IconButton size="sm">&#x2624;</IconButton>
        <pre className="how-to">{`<IconButton size="lg">&#x2624;</IconButton>`}</pre>
      </div>
      <div>
        <h3>Icon Button color</h3>
        <IconButton>&#x2624;</IconButton>
        <IconButton color="secondary">&#x2624;</IconButton>
        <IconButton color="danger">&#x2624;</IconButton>
        <IconButton color="close">&#x2624;</IconButton>
        <IconButton color="purple">&#x2624;</IconButton>
        <IconButton disabled>&#x2624;</IconButton>
        <pre className="how-to">{`<IconButton color="secondary">&#x2624;</IconButton>`}</pre>
      </div>
      <div>
        <h3>Button Size</h3>
        <Button size="lg">Button lg</Button>
        <Button>
          Button primary <span>@</span>
        </Button>
        <Button size="sm">Button sm</Button>
        <Button flat>flat btn</Button>
        <IconButton flat size="sm">
          @
        </IconButton>
        <pre className="how-to">{`<Button size="sm">Button sm</Button>`}</pre>
      </div>

      <div>
        <h3>Button color</h3>
        <Button>Button primary</Button>
        <Button color="secondary">Button secondary</Button>
        <Button color="danger">Button danger</Button>
        <Button color="close">Button close</Button>
        <Button color="purple">Button purple</Button>
        <Button disabled>Button disable</Button>
        <Button disabled color="secondary">
          Button disable
        </Button>
        <pre className="how-to">{`<Button color="secondary">Button secondary</Button>`}</pre>
      </div>
    </>
  );
};

ButtonPages.propTypes = {};

export default ButtonPages;
