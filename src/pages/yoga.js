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
  <Paragraph>You can input your comments here</Paragraph>
  <TextArea id="textarea" label="Comments" size="30" verticalSize="5">
  </TextArea>
  <Submit>Submit</Submit>
  </Main>
</Page>
);
