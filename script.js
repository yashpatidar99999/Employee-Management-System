const getEmployees = async () => {
  const response = await fetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees"
  );

  const employees = await response.json();

  const employee_table = document.getElementById("employee_table");

  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  employee_table.appendChild(thead);
  thead.appendChild(tr);
  const headings = Object.keys(employees.data[0]);
  headings.map((heading) => {
    const th = document.createElement("th");
    th.innerText = heading;
    tr.appendChild(th);
  });

  const tbody = document.createElement("tbody");
  tbody.id="tbody"
  employee_table.appendChild(tbody);
  employees.data.map((employee) => {
    const tr = document.createElement("tr");
    tbody.appendChild(tr);
    Object.values(employee).map((value) => {
      const td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    });
  });
};

getEmployees();

const renderEmployee = async (response) => {
  const employees = await response.json();
  const table_body = document.getElementById("tbody");
  table_body.innerHTML ="";

  employees.data.map((employee) => {
    const tr = document.createElement("tr");
    table_body.appendChild(tr);
    Oblject.values(employee).map((value) => {
      const td = document.createElement("td");
      td.innerText = value;
      tr.appendChild(td);
    });
  });
};

const departmentFilter = async () => {
  const department = document.getElementById("filter_by_department").value;
  const response = await fetch(
    `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${department}`
  );
  renderEmployee(response);
};

const genderFilter = async () =>{
    const gender = document.getElementById("filter_by_gender").value
    const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${gender}` 
    );
     renderEmployee(response);

}

const sortBySalary = async () => {
    const order = document.getElementById("sort_by_salary").value;
    const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&sort=salaey&order=${order}`
    )

    renderEmployee(response);
}
