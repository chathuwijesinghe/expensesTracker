export default function AuthLayout({ children }) {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-4">
                        <div className="auth-wrp">
                            {children}
                        </div>
                    </div>
                    <div className="col-8 main-img-wrp">

                    </div>
                </div>
            </div>
        </section>
    )

}