import React from 'react';
export const CardPage = () => (
    <div className="flex flex-wrap">
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          
          <CardBody>
            <CardTitle className="text-lg">React Portfolio</CardTitle>
            <CardText>
              A React application built from JavaScript, Tailwind CSS and hosted using Github. This served as an digital portfolio for showcasing projects as well as interests.
            </CardText>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" href="https://www.github.com">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          <CardBody>
            <CardTitle className="text-lg">Wrist Watch</CardTitle>
            <CardText>
              WristWatch is a program that tracks your dominant hand using webcam and makes sure that your wrist is straight
              at all times. If a bending of the wrist is decteted for a prolonged period of time, WristWatch would push a notification
              reminding the user to straighten their wrist. 
            </CardText>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer" href="https://github.com/AWaffleInc/WristWatch">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
      <div className="w-full md:w-4/12 mb-6 md:mb-0 md:p-3">
        <Card>
          <CardBody>
            <CardTitle className="text-lg">Trend Calendar</CardTitle>
            <CardText>
              Joe made the sugar cookies; Susan decorated them. When motorists
              sped in and out of traffic.
            </CardText>
            <a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">
              View Details
              <ArrowIcon />
            </a>
          </CardBody>
        </Card>
      </div>
    </div>
  );
  /* Logic */
  const style = {
    card: `relative flex flex-col border-2 border-gray-200 rounded-lg`,
    cardBody: `block flex-grow flex-shrink p-5`,
    cardTitle: `font-medium text-gray-700 mb-3`,
    cardText: `text-gray-500`,
  };
  const inlineStyle = {
    boxShadow: '0 2px 5px 0 rgb(0 0 0 / 16%), 0 2px 10px 0 rgb(0 0 0 / 12%)',
  };
  function Card({ children }) {
    return (
      <div className={style.card} style={inlineStyle}>
        {children}
      </div>
    );
  }
  function CardBody({ children }) {
    return <div className={style.cardBody}>{children}</div>;
  }
  function CardTitle({ children }) {
    return <div className={style.cardTitle}>{children}</div>;
  }
  function CardText({ children }) {
    return <div className={style.cardText}>{children}</div>;
  }
  const ArrowIcon = () => (
    <svg
      className="w-4 h-4 ml-2"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
  export default CardPage