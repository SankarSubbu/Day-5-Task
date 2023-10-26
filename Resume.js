let resume = {

 "name": "Sankar",
 "age": 21,
 "city": "Tiruppur",
 "Email-ID": "subbutup2612@gmail.com",
 "Phone number": "9003575842",
 "Degree": "B.Sc Computer Technology",
 "Technical Skills": "Full-stack development",
 "Non-Technical Skills": "Leadership, Team-mangement, Friendly and co-ordinative",
 "Summary": "Full stack developer with no years of experience in designing, developing, and implementing web applications.Proven ability to build and deploy scalable and user-friendly applications using a variety of technologies, including HTML, CSS, JavaScript, React, Node.js, and MySQL. Passionate about development and committed to staying up-to-date on the latest trends and technologies."
}

// basic for loop JSON iteration
const numberOfProperties = Object.keys(resume).length

for (let i = 0; i < numberOfProperties; i++) {
 const property = Object.keys(resume)[i]
 const value = resume[property]

 console.log(`${property}: ${value}`)
}

//using for in loop
for (const Property in resume) {
 console.log(Property)
}

//using for of loop
for (const Value of resume) {
 console.log(Value);
}

//using forEach loop
resume.array.forEach(property1, value1 => {
 console.log(`${property1}:${value1}`)
});