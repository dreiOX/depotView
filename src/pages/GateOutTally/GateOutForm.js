import { useState } from "react";
import {
  Container,
  Card,
  Form,
  Heading,
  Input,
  Label,
  Select,
  Button,
} from "./GateOutFormStyles";

function GateOutForm({ setGateOutData }) {
  const [inputs, setInputs] = useState({
    shippingLine: "",
    containerNumber: "",
    truckNumber: "",
    containerSize: "",
    containerCondition: "",
    gateOutDate: "",
    containerStatus: "",
  });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setGateOutData((prevGateOutDataState) => [...prevGateOutDataState, inputs]);

    setInputs({
      shippingLine: "",
      containerNumber: "",
      truckNumber: "",
      containerSize: "",
      containerCondition: "",
      gateOutDate: "",
      containerStatus: "",
    });
  };

  return (
    <Container>
      <Heading>Container Gate-Out Tally</Heading>
      <Form onSubmit={handleSubmit}>
        <Card>
          <Label>Shipping line*:</Label>
          <Input
            type="text"
            name="shippingLine"
            value={inputs.shippingLine}
            onChange={handleChange}
            placeholder="Shipping line"
          />
        </Card>
        <Card>
          <Label>Container number*:</Label>
          <Input
            type="text"
            name="containerNumber"
            value={inputs.containerNumber}
            onChange={handleChange}
            placeholder="Container number"
          />
        </Card>
        <Card>
          <Label>Truck number*:</Label>
          <Input
            type="text"
            name="truckNumber"
            value={inputs.truckNumber}
            onChange={handleChange}
            placeholder="Truck number"
          />
        </Card>
        <Card>
          <Label>Container status*:</Label>
          <Select
            type="text"
            name="containerStatus"
            placeholder="Enter now"
            value={inputs.containerStatus}
            onChange={handleChange}
          >
            <option>Select status</option>
            <option value="EXITED">EXITED</option>
          </Select>
        </Card>
        <Card>
          <Label>Container size*:</Label>
          <Select
            type="text"
            name="containerSize"
            value={inputs.containerSize}
            onChange={handleChange}
          >
            <option>Select size</option>
            <option value="20FT">20FT</option>
            <option value="40FT">40FT</option>
          </Select>
        </Card>
        <Card>
          <Label>Container condition*:</Label>
          <Select
            name="containerCondition"
            value={inputs.containerCondition}
            onChange={handleChange}
          >
            <option>Select condition</option>
            <option value="OK">OK</option>
            <option value="DENTED">DENTED</option>
            <option value="SCRATCHED">SCRATCHED</option>
            <option value="DAMAGED">DAMAGED</option>
          </Select>
        </Card>

        <Card>
          <Label>Gate out date*:</Label>
          <Input
            type="date"
            name="gateOutDate"
            value="date"
            onChange={handleChange}
          />
        </Card>
        <Card>
          <Button>SUBMIT</Button>
        </Card>
      </Form>
    </Container>
  );
}

export default GateOutForm;
