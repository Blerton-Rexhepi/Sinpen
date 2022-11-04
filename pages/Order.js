const Order = () => {
  return (
    <div className="grid grid-col-2 h-screen place-items-center">
      <form action="/send-data-here" method="post">
        <div className="mb-2">
          <label for="first">First name:</label>
          <input
            type="text"
            id="first"
            name="first"
            className="border-solid border-2 border-gray-600 ml-2 "
          />
        </div>
        <div className="mb-2">
          <label for="last">Last name:</label>
          <input
            type="text"
            id="last"
            name="last "
            className="border-solid border-2 border-gray-600 ml-2"
          />
        </div>
        <div className="mb-2">
          <label for="email"> Email:</label>
          <input
            type="email"
            id="email"
            name="email "
            className="border-solid border-2 border-gray-600 ml-2"
          />
        </div>
        <div className="mb-2">

          <label for="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            className="border-solid border-2 border-gray-600 ml-2"
          />
        </div>
        <div className="mb-2">
          <label for="phoneNum">Phone Number</label>
          <input
            type="phonenum"
            id="phoneNum"
            name="phoneNum"
            className="border-solide border-2 border-gray-600 ml-2"
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default Order;
