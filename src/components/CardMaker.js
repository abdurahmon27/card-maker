import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";
import { BsDownload } from "react-icons/bs";
import Draggable from "react-draggable";
import { Modal } from "antd";

const Card = ({ frameData }) => {
  const { id, frameId } = useParams();
  const cardRef = useRef();
  const nodeRef = useRef();
  const [isDraggable, setDraggable] = useState(false);
  const [imageWidth, setImageWidth] = useState(310);
  const [elementWidth, setElementWidth] = useState(300);
  const [imageHeight, setImageHeight] = useState(200);
  const [modalVisible, setModalVisible] = useState(true);

  if (!frameData || !Array.isArray(frameData)) {
    return <div>Invalid frame data</div>;
  }

  const selectedFrame = frameData.find(
    (frame) => frame.id === parseInt(id, 10)
  );

  if (!selectedFrame || !selectedFrame.framesExample) {
    return <div>Frame or frame example not found</div>;
  }

  const selectedFrameExample = selectedFrame.framesExample.find(
    (frameExample) => frameExample.id === parseInt(frameId, 10)
  );

  if (!selectedFrameExample) {
    return <div>Frame example not found</div>;
  }

  const handlePdfDownload = async () => {
    const canvas = await html2canvas(cardRef.current);
    const pdf = new html2pdf(canvas, {
      margin: 10,
      filename: `${selectedFrameExample.title}.pdf`,
      image: { type: "jpeg", quality: 0.98, width: "auto", height: "auto" },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "landscape" },
    });
    pdf.save();
  };

  const handlePngDownload = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.href = canvas.toDataURL("image/png");
      link.download = `${selectedFrameExample.title}.png`;
      link.click();
    });
  };

  const toggleDraggable = () => {
    setDraggable(!isDraggable);
  };

  const handleWidthChange = (e) => {
    const width = parseInt(e.target.value, 10) || 0;
    setImageWidth(width);
  };

  const handleHeightChange = (e) => {
    const height = parseInt(e.target.value, 10) || 0;
    setImageHeight(height);
  };

  const handleElementWidthChange = (e) => {
    const elementwidth = parseInt(e.target.value, 10) || 0;
    setElementWidth(elementwidth);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  return (
    <div className="flex items-center justify-evenly flex-wrap my-10 bg-[#484848] text-white p-5 rounded-lg container">
      <div className="mb-auto flex items-center justify-center flex-col">
        <span className="mx-auto my-3 text-xl font-sans">
          {selectedFrameExample.title}
        </span>
        <div
          className="mx-3 mb-auto relative overflow-hidden border rounded- p-2 bg-white"
          ref={cardRef}
          style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
        >
          <Draggable nodeRef={nodeRef} disabled={!isDraggable}>
            <div ref={nodeRef} className={`w-[${elementWidth}px]`} style={{width: `${elementWidth}px`}}>
              {selectedFrameExample.element}
            </div>
          </Draggable>
        </div>
      </div>

      <Modal
        title="Details"
        open={modalVisible}
        onCancel={handleModalCancel}
        footer={null}
        width={350}
      >
        <div>
          <span>Card Size:</span>
          <div className="flex items-center gap-x-3">
            <span>Width:</span>
            <input
              type="number"
              value={imageWidth}
              min="100"
              max="1000"
              onChange={handleWidthChange}
            />
            <span>{imageWidth}px</span>
          </div>
          <div className="flex items-center gap-x-3">
            <span>Height:</span>
            <input
              type="number"
              value={imageHeight}
              min="100"
              max="1000"
              onChange={handleHeightChange}
            />
            <span>{imageHeight}px</span>
          </div>
          <span>Size of Element</span>
          <input
              type="number"
              value={elementWidth}
              min="100"
              max="1000"
              onChange={handleElementWidthChange}
            /> <span>{elementWidth}px</span>
          <button
            onClick={toggleDraggable}
            className="py-3 px-5 rounded-full border flex items-center justify-center gap-x-3"
          >
            <span>{isDraggable ? "Lock" : "Unlock"} Draggable</span>
          </button>
        </div>
      </Modal>

      <div className="p-3 bg-white text-[#484848]">
        <div className="flex items-center justify-center flex-col gap-y-3 mt-5">
          <button
            onClick={handlePdfDownload}
            className="py-3 px-5 rounded-full border flex items-center justify-center gap-x-3"
          >
            <BsDownload />
            <span>Download as PDF</span>
          </button>
          <button
            onClick={handlePngDownload}
            className="py-3 px-5 rounded-full border flex items-center justify-center gap-x-3"
          >
            <BsDownload />
            <span>Download as PNG</span>
          </button>
          <button
            onClick={showModal}
            className="py-3 px-5 rounded-full border flex items-center justify-center gap-x-3"
          >
            <span>Show Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
