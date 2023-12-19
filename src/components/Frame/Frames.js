
import React, { useState } from "react";
import { Modal } from "antd";
import { useNavigate } from "react-router-dom";
import frameData from "./frameData";

const Frame = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedFrame, setSelectedFrame] = useState(null);

  const navigate = useNavigate();

  const handleTitleClick = (frame) => {
    setSelectedFrame(frame);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setSelectedFrame(null);
    setModalVisible(false);
  };

  const handleFrameExampleClick = (frameExample) => {
    setModalVisible(false);
    navigate(`/card/${selectedFrame.id}/${frameExample.id}`);
  };

  return (
    <div>
      <div className="lg:w-[1500px] h-full my-8 flex items-center justify-center flex-wrap gap-5">
        {frameData.map((frame) => (
          <div
            key={frame.id}
            className="flex items-center justify-center gap-3 flex-col"
            onClick={() => handleTitleClick(frame)}
          >
            <div className="border p-3 lg:h-[350px] lg:w-[350px] flex items-center justify-center">
              {frame.htmlElement}
            </div>
            <span className="mx-auto text-3xl font-semibold font-sans cursor-pointer">
              {frame.title}
            </span>
          </div>
        ))}
      </div>

      <Modal
        title={selectedFrame ? selectedFrame.title : ""}
        open={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
      >
        <div className=" lg:w-[500px] flex items-center justify-center flex-wrap gap-3">
        {selectedFrame &&
          selectedFrame.framesExample &&
          selectedFrame.framesExample.map((frameExample) => (
            <div
              key={frameExample.id}
              onClick={() => handleFrameExampleClick(frameExample)}
              className="w-[200px] h-[200px] border flex items-center justify-center"
            >
              <h3>{frameExample.title}</h3>
              <div>{frameExample.element}</div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default Frame;
