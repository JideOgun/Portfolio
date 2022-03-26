import React, { useState } from "react";

function FilterTech(props) {
  const { techProj, setTechProjects } = props;
  const technologies = [
    { name: "Node.js", id: 1 },
    { name: "Sequelize ORM", id: 2 },
    { name: "HTML", id: 3 },
    { name: "CSS", id: 4 },
    { name: "MySQL", id: 5 },
    { name: "Javascript", id: 6 },
    { name: "jQuery", id: 7 },
  ];

  const [checkbox, setCheckbox] = useState(true);

  const handleCheckbox = (e) => {
    setCheckbox(!checkbox);
    console.log(e.target.checked, e.target.name);
    console.log(techProj);
    const newTech = techProj.filter((tech) => {
      console.log(tech.technology);
      return tech.technology.includes(e.target.name)
    });
    // if (e.target.checked && !tech.technology.includes(e.target.name)) {
    //     return tech.technology === e.target.name;
    //   }
    //   else {
    //      return tech.technology;
    //   }
    
    console.log(newTech);
    setTechProjects(newTech);
  };

  return (
    <div>
      <div>Full Stack Projects - will filter according to technology</div>
      {technologies.map((tech) => {
        return (
          <label htmlFor={tech.id} key={tech.id}>
            <span>{tech.name} </span>
            <input
              type="checkbox"
              onClick={handleCheckbox}
              data-id={tech.id}
              name={tech.name}
            ></input>
          </label>
        );
      })}
    </div>
  );
}

export default FilterTech;
