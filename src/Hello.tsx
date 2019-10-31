import React from "react";

interface HelloProps {
  name: string;
}

function Hello({ name }: HelloProps) {
  return <h1>Hello {name}, Welcome to TypeScript React</h1>;
}

export default Hello;
