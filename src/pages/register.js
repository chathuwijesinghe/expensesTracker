import AuthLayout from "@/components/authLayout";
import Image from 'next/image';
export default function Register() {
    return (
        <AuthLayout>

            <h1>Register</h1>
            <p className="text-muted">Lorem ipsum dummy text</p>

            <form>
                <div className="form-group mb-3">
                    <input type="text" placeholder="Full Name" class="form-control" />
                </div>
                <div className="form-group mb-3">
                    <input type="email" placeholder="Email" class="form-control" />
                </div>
                <div className="form-group mb-3">
                    <input type="password" placeholder="Password" class="form-control" />
                </div>

                <button className="btn w-100 btn-primary mb-2">Signup</button>
                <button className="btn w-100 btn-outline-secondary mb-2 "><Image src={"../../google.svg"} width={15} height={15}></Image> Signup with Google</button>

                <button className="btn w-100 btn-outline-secondary mb-2"><Image src={"../../github.svg"} width={15} height={15}></Image>
                     Signup with GitHub</button>

            </form>
        </AuthLayout>
    )


}