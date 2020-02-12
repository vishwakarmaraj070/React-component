import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Input,
  NumberField,
  PANField,
  PINCodeField,
  StateField,
  SelectField,
  AddressField,
  TextArea,
  SearchField,
  PasswordField
} from "../component/Input";
import InputIcon from "../component/Input/InputIcon";
import CountryField from "../component/Input/CountryField";

const InputPage = props => {
  const [pan, setPan] = useState("");
  console.log("pan", pan);
  return (
    <>
      {/* other */}
      <div>
        <h3>Other input field</h3>
        <AddressField stateCode="29" placeholder="address field" />
        <pre className="how-to">{`<AddressField stateCode="29" placeholder="address field" />`}</pre>
        <PINCodeField placeholder="PIN code field" />
        <pre className="how-to">{`<PINCodeField placeholder="PIN code field" />`}</pre>
        <PANField placeholder="pan field" />
        <pre className="how-to">{`<PANField placeholder="pan field" />`}</pre>

        <SelectField defaultText="Select Option" size="sm">
          <option>option</option>
          <option>option 3</option>
          <option>option</option>
          <option>option</option>
        </SelectField>
        <pre className="how-to">{`<SelectField defaultText="Select Option" size="sm">
          <option>option</option>
          <option>option 3</option>
          <option>option</option>
          <option>option</option>
        </SelectField>`}</pre>
        <CountryField />
        <pre className="how-to">{` <CountryField />`}</pre>
        <StateField />
        <pre className="how-to">{`<StateField />`}</pre>
        <SearchField placeholder="search field" size="sm" />
        <pre className="how-to">{`<SearchField placeholder="search field" />`}</pre>
        <PasswordField placeholder="Password field" />
        <pre className="how-to">{`<PasswordField placeholder="Password field" />`}</pre>
        <Input placeholder="input field label field" label="label field" />
        <pre className="how-to">{`<Input placeholder="input field label field" label="label field" />`}</pre>
        <InputIcon placeholder="input with icon" icon="$" required />
        <pre className="how-to">{`<InputIcon placeholder="input with icon" icon="$" required />`}</pre>
        <TextArea placeholder="text area" />
        <pre className="how-to">{`<TextArea placeholder="text area" />`}</pre>
        <NumberField
          placeholder="NumberField label field"
          label="label field"
        />
        <pre className="how-to">{`<NumberField
          placeholder="NumberField label field"
          label="label field"
        />`}</pre>
      </div>

      {/* validation */}
      <div>
        <h3>Globle validation</h3>

        <Input placeholder="input field required" required />
        <pre className="how-to">{`<Input placeholder="input field required" required />`}</pre>
        <Input placeholder="input field minLenght" minLength={3} />
        <pre className="how-to">{`<Input placeholder="input field minLenght" minLength={3} />`}</pre>
        <Input placeholder="input field minLenght" minLength={5} />
        <pre className="how-to">{`<Input placeholder="input field minLenght" minLength={5} />`}</pre>

        <Input placeholder="input field maxLenght" maxLength={3} />
        <pre className="how-to">{`<Input placeholder="input field maxLenght" maxLength={3} />`}</pre>
        <Input placeholder="input field exact" exact={3} />
        <pre className="how-to">{`<Input placeholder="input field exact" exact={3} />`}</pre>
        <Input placeholder="input field readyOnly" readOnly />
        <pre className="how-to">{`<Input placeholder="input field readyOnly" readOnly />`}</pre>
        <Input placeholder="input field disabled" disabled />
        <pre className="how-to">{`<Input placeholder="input field disabled" disabled />`}</pre>
        <NumberField placeholder="NumberField  required" required />
        <pre className="how-to">{`<NumberField placeholder="NumberField  required" required />`}</pre>
        <NumberField placeholder="NumberField  minLenght" minLength={3} />
        <pre className="how-to">{` <NumberField placeholder="NumberField  minLenght" minLength={3} />`}</pre>
        <NumberField placeholder="NumberField  maxLenght" maxLength={3} />
        <pre className="how-to">{`<NumberField placeholder="NumberField  maxLenght" maxLength={3} />`}</pre>
        <NumberField placeholder="NumberField  exact" exact={3} />
        <pre className="how-to">{`<NumberField placeholder="NumberField  exact" exact={3} />`}</pre>
        <NumberField placeholder="NumberField  readOnly" readOnly />
        <pre className="how-to">{`<NumberField placeholder="NumberField  readOnly" readOnly />`}</pre>
        <NumberField placeholder="NumberField  disabled" disabled />
        <pre className="how-to">{`<NumberField placeholder="NumberField  disabled" disabled />`}</pre>
      </div>

      {/* size */}
      <div>
        <h3>input size</h3>
        <Input placeholder="input field large" size="lg" />
        <pre className="how-to">{`<Input placeholder="input field large" size="lg" />`}</pre>
        <Input placeholder="input field middium" />
        <pre className="how-to">{`<Input placeholder="input field middium" />`}</pre>
        <Input placeholder="input field sm" size="sm" />
        <pre className="how-to">{`<Input placeholder="input field sm" size="sm" />`}</pre>
        <NumberField placeholder="NumberField  large" size="lg" />
        <pre className="how-to">{`<NumberField placeholder="NumberField  large" size="lg" />`}</pre>
        <NumberField placeholder="NumberField  middium" />
        <pre className="how-to">{` <NumberField placeholder="NumberField  middium" />`}</pre>
        <NumberField
          placeholder="NumberField sm"
          size="sm"
          value={pan}
          maxLength={3}
          onChange={e => setPan(e.target.value)}
        />
        <pre className="how-to">{` <NumberField placeholder="NumberField sm" size="sm" />`}</pre>
      </div>
    </>
  );
};

InputPage.propTypes = {};

export default InputPage;
