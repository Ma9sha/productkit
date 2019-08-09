import{
  Paragraph,
  Image,
  Caption,
  Main
} from "@barnardos/components";
import React from "react";
import Page from "../components/Page";
import { withPrefix } from "gatsby";

export default () => (
  <Page>
   <Main>
    <Paragraph>Have a look at my yoga site</Paragraph>
    <Caption label="Yoga">
      <Image src={withPrefix("/yoga.jpg")} />
    </Caption>
   </Main>
   </Page>
);
