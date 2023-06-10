import React from "react"; // @ts-ignore
import { Divider, Flex, Icon, NoticeBar, QRCode, Watermark } from "rui-next";
import TodoList from "@/TodoList";
import Update from "@/components/update";

console.log(
  "[App.tsx]",
  `RUI Hello world from Electron ${process.versions.electron}!`
);

// App FC
const App: React.FC = () => {
  const handleBtnClick = () => {
    location.href = "https://nikoni.top/rui-next/docs/";
  };

  return (
    <div className="watermark-wrapper">
      <Watermark content="RUI next" />

      <NoticeBar
        type="alert"
        content="This is the playground for RUI.next. Please scan the QR code to access the examples on mobile/tablet device."
        extra={
          <Icon
            key="extra-button"
            type="ellipsis"
            className="mr"
            onClick={handleBtnClick}
          />
        }
        closeable
      />

      <Divider contentAlign="center">Todo List with animated progress</Divider>

      <TodoList />

      <Divider contentAlign="left">QR Code</Divider>

      <Flex justify="center">
        <QRCode value="https://nikoni.top/rui-next/docs/" border />
      </Flex>

      <Divider contentAlign="right">RUI Playground</Divider>

      <Flex justify="center">
        <Update />
      </Flex>
    </div>
  );
};

export default App;
