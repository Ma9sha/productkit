import{
  Paragraph,
  Main,
  TextArea,
  Submit
} from "@barnardos/components";
import React from "react";
import Page from "../components/Page";
import { withPrefix } from "gatsby";

export default () => (
<Page>
  <Main>
  <Paragraph>You can enter Service details here</Paragraph>
  <form name="service-info" action="/display" method="POST">
  <TextArea id="textarea" label="Information" size="30" verticalSize="5">
  </TextArea>
  <Submit>Submit</Submit>
  <Submit>Edit</Submit>
  <Submit>Delete</Submit>
  </form>
  </Main>
</Page>
);
