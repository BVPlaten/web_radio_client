import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop, faBackward, faForward, faEject } from '@fortawesome/free-solid-svg-icons';
import { Popover, OverlayTrigger } from 'react-bootstrap';
import './CDPlayerControlBar.css';

interface Button {
  name: string;
  icon: any;
  description: string;
}

const CDPlayerControlBar: React.FC = () => {
  const buttons: Button[] = [
    {
      name: 'play',
      icon: faPlay,
      description: 'Wiedergabe'
    },
    {
      name: 'pause',
      icon: faPause,
      description: 'Pause'
    },
    {
      name: 'stop',
      icon: faStop,
      description: 'Stopp'
    },
    {
      name: 'rewind',
      icon: faBackward,
      description: 'Zurückspulen'
    },
    {
      name: 'fastForward',
      icon: faForward,
      description: 'Vorspulen'
    },
    {
      name: 'eject',
      icon: faEject,
      description: 'Auswerfen'
    }
  ];

  const renderPopover = (description: string) => (
    <Popover id="popover-basic">
      <Popover.Body>{description}</Popover.Body>
    </Popover>
  );

  return (
    <div className="controlBar">
      {buttons.map((button) => (
        <OverlayTrigger
          key={button.name}
          trigger={['hover', 'focus']}
          placement="top"
          overlay={renderPopover(button.description)}
        >
          <button className="controlBarButton">
            <FontAwesomeIcon icon={button.icon} />
          </button>
        </OverlayTrigger>
      ))}
    </div>
  );
};

export default CDPlayerControlBar;
