import React from 'react';
import { List, Card } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles
import '../styles/Content.scss'; // Import your custom styles

const projects = [
  { id: 1, title: "Project 1" },
  { id: 2, title: "Project 2" },
  { id: 3, title: "Project 3" },
  { id: 4, title: "Project 4" },
  { id: 5, title: "Project 5" },
  { id: 6, title: "Project 6" },
  { id: 7, title: "Project 7" },
  { id: 8, title: "Project 8" },
  { id: 9, title: "Project 9" },
  { id: 10, title: "Project 10" },
  { id: 11, title: "Project 11" },
  { id: 12, title: "Project 12" },
  { id: 13, title: "Project 13" },
  { id: 14, title: "Project 14" },
  { id: 15, title: "Project 15" },
  { id: 16, title: "Project 16" },
  { id: 17, title: "Project 17" },
  { id: 18, title: "Project 18" },
  { id: 19, title: "Project 19" },
  { id: 20, title: "Project 20" },
];

const Content: React.FC = () => {
  return (
    <div className="content">
      <List
        grid={{ gutter: 16, column: 4 }} // Display projects in a grid
        dataSource={projects}
        renderItem={project => (
          <List.Item>
            <Card title={project.title} bordered={false} className="project-card">
              {`Details of ${project.title}`} {/* Customize as needed */}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Content;
