import React from 'react';
import styled from 'styled-components';
import { Button } from './components/Button';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Dropdown } from './components/Dropdown';
import { RadioButton } from './components/RadioButton';
import { Img } from './components/Img';
import { HeroImage } from './components/HeroImage';
import { Card } from './components/Card';
import { Table } from './components/Table';
import { TableHeader } from './components/TableHeader';
import { TableRow } from './components/TableRow';
import { TableCell } from './components/TableCell';
import { TableFooter } from './components/TableFooter';

const Container = styled.div`
  padding: 30px;
  font-family: Arial, sans-serif;
  max-width: 900px;
  margin: 0 auto;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h2`
  border-bottom: 2px solid #007bff;
  padding-bottom: 8px;
  color: #333;
`;

const Grid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 15px;
`;

function App() {
  return (
    <Container>
      <HeroImage
        title="Manpreet Kaur's UI Component Library"
        subtitle="Assignment 12 - Web Component Library Showcase"
      />

      <Section>
        <Title>Typography & Inputs</Title>
        <Grid>
          <div>
            <Label>Active Label</Label>
            <Text>This is an active text component.</Text>
            <Button label="Active Button" />
          </div>
          <div>
            <Label disabled>Disabled Label</Label>
            <Text disabled>This is a disabled text component.</Text>
            <Button label="Disabled Button" disabled />
          </div>
        </Grid>
      </Section>

      <Section>
        <Title>Selection Components</Title>
        <Grid>
          <Dropdown placeholder="Select option..." />
          <RadioButton label="Option A" name="demo" />
          <RadioButton label="Disabled Option" name="demo" disabled />
        </Grid>
      </Section>

      <Section>
        <Title>Media & Card</Title>
        <Grid>
          <Img width="150px" alt="Active media" />
          <Img width="150px" alt="Disabled media" disabled />
          <Card title="Component Card" description="A responsive card component built with Styled-Components." />
        </Grid>
      </Section>

      <Section>
        <Title>Data Table</Title>
        <Table>
          <thead>
            <TableRow>
              <TableHeader>Header 1</TableHeader>
              <TableHeader>Header 2</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>Row 1 - Data 1</TableCell>
              <TableCell>Row 1 - Data 2</TableCell>
            </TableRow>
            <TableRow disabled>
              <TableCell disabled>Disabled Row</TableCell>
              <TableCell disabled>Disabled Data</TableCell>
            </TableRow>
          </tbody>
          <TableFooter>
            <TableRow>
              <TableCell>Footer 1</TableCell>
              <TableCell>Footer 2</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </Section>
    </Container>
  );
}

export default App;