import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./components/search-box/SearchBox";
import CardList from "./components/card-list/CardList";
import Pagination from "./components/pagination/Pagination";

function App() {
  const [searchField, setSearchField] = useState("");
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userDataPerPage] = useState(20);
  const [btnCondition, setBtnCondition] = useState(null);
  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const result = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );
      setUsers(result.data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  //Get current users
  const indexOfLastUserData = currentPage * userDataPerPage;
  const indexOfFirstUserData = indexOfLastUserData - userDataPerPage;

  const currentUserData = users?.records?.profiles?.slice(
    indexOfFirstUserData,
    indexOfLastUserData
  );

  // //filterData on search
  const handleChange = (event) => setSearchField(event.target.value);

  const searchedUsers = currentUserData?.filter(
    (user) =>
      user.FirstName.toLowerCase().includes(searchField.toLowerCase()) ||
      user.LastName.toLowerCase().includes(searchField.toLowerCase()) ||
      user.UserName.toLowerCase().includes(searchField.toLowerCase()) ||
      user.CreditCardNumber.includes(searchField) ||
      user.CreditCardType.toLowerCase().includes(searchField.toLowerCase()) ||
      user.PaymentMethod.toLowerCase().includes(searchField.toLowerCase())
  );

  //change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setBtnCondition(pageNumber);
  };

  return (
    <div className="container">
      <SearchBox placeholder="Search..." handleChange={handleChange} />
      <Pagination
        userDataPerPage={userDataPerPage}
        totalUsersData={users?.records?.profiles?.length}
        paginate={paginate}
        btnCondition={btnCondition}
      />
      <CardList
        users={searchedUsers}
        searchField={() => handleChange}
        loading={loading}
      />
    </div>
  );
}

export default App;
