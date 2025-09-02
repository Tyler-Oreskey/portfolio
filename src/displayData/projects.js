const projects = [
  {
    name: "Fishtopia",
    description:
      "Fishermen web application allowing recording of catch information. Location marker, fish species, equipment, and tackle used are posted into a PostgreSQL database. Data is rendered as a Gmaps API marker and accessible to the rest of the fishermen community.",
    techs: "React with Redux, HTML, CSS, JavaScript, Bootstrap, Node.js, PostgreSQL, Express.js, Knex.js, and JOI validation",
    projectLinks: {
      frontend: "https://github.com/Tyler-Oreskey/Fishtopia_Frontend",
      backend: "https://github.com/Tyler-Oreskey/Fishtopia_Backend",
    },
    image:
      "https://www.greaterseattleonthecheap.com/wordpress/wp-content/uploads/2020/05/Fly-fishing-with-Emerald-Water-Anglers.jpg",
  },
  {
    name: "Trip Planner",
    description: "Designed and developed a user-friendly mobile trip planning application for seamless tour creation and management. Enabled users to add locations to their tours by selecting points on a map or manually entering latitude and longitude coordinates. Implemented heuristic algorithms to optimize the total distance of trips, enhancing route efficiency and user convenience. Focused on intuitive design and functionality to provide a smooth and efficient trip planning experience.",
    techs: "Java, Spark, Junit, JavaScript, React, Jest, Node.js, MariaDB, Bootstrap, Mockito, Maven, JaCoCo",
    projectLinks: {
      frontend: "https://github.com/Tyler-Oreskey/Trip-Planner/tree/main/client",
      backend: "https://github.com/Tyler-Oreskey/Trip-Planner/tree/main/server",
    },
    image: "https://roamingtheamericas.com/wp-content/uploads/2017/07/29-2366-post/rawpixel-com-191102.jpg",
  },
  {
    name: "Company Project Manager",
    description: "Developed a comprehensive company management web application with a user-centric interface to enable efficient management of employees and projects, streamlining business operations. Ensured high code quality and reliability with tools like JaCoCo, PIT, Evosuite, and SpotBugs.",
    techs: "Java, Spark, Junit, JavaScript, React, Jest, Node.js, Mockito, Maven, JaCoCo, PIT, Evosuite, SpotBugs",
    projectLinks: {
      frontend: "https://github.com/Tyler-Oreskey/Company-Project-Manager/tree/main/client",
      backend: "https://github.com/Tyler-Oreskey/Company-Project-Manager/tree/main/server",
    },
    image: "https://www.shutterstock.com/image-photo/group-healthcare-workers-businessman-using-600nw-1763058089.jpg",
  },
  {
    name: "Good Samaratin",
    description:
      "Mobile application presenting the user a choice of actions for emergency situations. An emergency event allows the user to call 911 and presents a list of steps to aid the person while help is on its way. Alternate solutions are offered to approach a specific emergency to aid in saving a life.",
    techs: "React Native with Redux, HTML, CSS, JavaScript, Bootstrap, Node.js, PostgreSQL, Express.js, Knex.js, and JOI validation",
    projectLinks: {
      frontend: "https://github.com/Tyler-Oreskey/Good_Samaratin_Frontend",
      backend: "https://github.com/Tyler-Oreskey/Good_Samaratin_Backend",
    },
    image:
      "https://t3.ftcdn.net/jpg/02/38/08/42/360_F_238084232_5XhGUddDZezzJxybvVXzfPp8cOKAuqRp.jpg",
  },
  {
    name: "Hackateam",
    description:
      "Web application that encourages people of all coding skill levels to collaborate and hack together based on similar skill sets or project interests. The app alleviates complexities in finding or creating at team based off skill set, interests, personality, and cultural diversity.",
    techs: "HTML, CSS, JavaScript, Bootstrap, Node.js, PostgreSQL, Express.js, and Knex.js",
    projectLinks: {
      frontend: "https://github.com/sparkyyc/hackateam",
      backend: "https://github.com/agdillon/hackateam",
    },
    image:
      "https://res.cloudinary.com/devex/image/fetch/c_scale,f_auto,q_auto,w_720/https://lh4.googleusercontent.com/VQyrPPyh-FGdV2BJtlcwDphesnxERD6SLWvGtARygLDVNSsXhFF0kzG_yXvLyiARZbKIG3VYF_CIbF4_B-Wy3Eu7kKhHKKR3pq_2ob2pdZgxt_Wz_uqXjRMrhIBKREQnJo--Ui9b",
  },
  {
    name: "Ice Cap Monitor",
    description:
      "A tool designed to monitor and analyze ice caps using satellite imagery. By leveraging ArcGIS data, it processes satellite images (TIFF files) to calculate the Normalized Difference Snow Index (NDSI), enabling accurate detection of snow presence and coverage. The application is optimized for handling large-scale datasets efficiently.",
    techs: "Java, Hadoop MapReduce, Python, ArcGIS, TIFF file processing",
    projectLinks: {
      frontend: "https://github.com/Tyler-Oreskey/cs435-project",
      backend: "https://github.com/Tyler-Oreskey/cs435-project",
    },
    image:
      "https://news.harvard.edu/wp-content/uploads/2021/09/iStock-antarctica-anyaberkut.jpg",
  },
  
];

export default projects;