function Newsletter() {
    return (
        <div className="subPages">
            <h2>Newsletter</h2>
            <p>Subscribe to the Design Shop Newsletter</p>
            <form>
                <input type="email" placeholder="Enter your e-mail address"></input>
                <input type="submit" value="Subsribe now"></input>
            </form>
        </div>
    );
};

export default Newsletter;