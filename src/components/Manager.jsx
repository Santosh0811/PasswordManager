import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
// import 'react-toastify/dist/ReactToastify.css';


const Manager = () => {
    const [isPasswordVisible, setisPasswordVisible] = useState(false);
    const [form, setForm] = useState({ site: "", username: "", password: "" })
    const [passwordArray, setPasswordArray] = useState([])

    const showPassword = () => {
        setisPasswordVisible((prevState) => !prevState);
    }

    useEffect(() => {
        let password = localStorage.getItem("password");

        if (password) {
            setPasswordArray(JSON.parse(password));
        }
    }, [])


    const savePassword = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }]);
        localStorage.setItem("password", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]));
        // console.log([...passwordArray, form]);
        toast.success('Your Password is Saved', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setForm({ site: "", username: "", password: "" });
    }
    else {
        toast('Password not Saved', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    }

    const deletePassword = (id) => {
        let cfm = confirm("Are you Sure to Delete your Password?");

        if (cfm) {
            setPasswordArray(passwordArray.filter(item => (item.id !== id)));
            localStorage.setItem("password", JSON.stringify(passwordArray.filter(item => (item.id !== id))));

            toast('Your Password is Deleted', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const edit = (id) => {
        let cfm2 = confirm("Are you Sure to Edit your Password?");
        if (cfm2) {
            const itemEdit = passwordArray.find(item => item.id === id)
            if (itemEdit) {
                setForm(itemEdit);
            }
            setPasswordArray(passwordArray.filter(item => (item.id !== id)));

            toast('Your Password is Edited', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const copyText = (text) => {
        toast('Copy to Clipboard', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        navigator.clipboard.writeText(text);
    }


    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className="absolute inset-0 -z-10 h-full w-full bg-purple-100 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>

            <div className="p-2 md:mycontainer">
                <h1 className='text-3xl text font-bold text-center'>
                    <span className="text-purple-500">&lt;</span>
                    Password
                    <span className="text-purple-500">Manager /&gt;</span>
                </h1>
                <h2 className='text-purple-900 text-lg text-center'>Your own Password Manager</h2>

                <div className="text-black flex flex-col p-4 gap-8 items-center">
                    <input value={form.site} onChange={handleChange} placeholder='Enter Website URL' className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className="flex flex-col md:flex-row w-full justify-between gap-8">
                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-purple-500 w-full p-4 py-1' type="text" name="username" id="username" />

                        <div className="relative">
                            <input value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-purple-500 w-full p-4 py-1' type={`${isPasswordVisible ? 'text' : 'password'}`} name="password" id="password" />
                            <span className="absolute right-[1px] top-[1px] cursor-pointer" onClick={showPassword}>
                                <i className={`fas ${isPasswordVisible ? 'fa-eye-slash p-2' : 'fa-eye p-2'}`}></i>
                            </span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='flex justify-center items-center gap-2 bg-purple-400 hover:bg-purple-300 rounded-full px-8 py-2 w-fit border border-purple-900'>
                        <i className="fa-solid fa-file-circle-plus"></i>
                        Save Password</button>
                </div>

                <div className="password">
                    <h2 className='font-bold text-2xl py-4'>Your Password</h2>
                    {passwordArray.length === 0 && <div>No Password to Show</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-xl overflow-hidden mb-16">
                        <thead className='bg-purple-800 text-white'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='bg-purple-200'>
                            {passwordArray.map((item) => {
                                return <tr>
                                    <td className='text-center w-32 py-2 border border-white'>
                                        <a href={item.site} target='_blank'>{item.site}</a>
                                        <i className="fa-solid fa-copy ml-2 cursor-pointer" onClick={() => { copyText(item.site) }}></i>
                                    </td>

                                    <td className='text-center w-32 py-2 border border-white'>{item.username}<i className="fa-solid fa-copy ml-2 cursor-pointer" onClick={() => { copyText(item.username) }}></i>
                                    </td>

                                    <td className='text-center w-32 py-2 border border-white'>{item.password}<i className="fa-solid fa-copy ml-2 cursor-pointer" onClick={() => { copyText(item.password) }}></i>
                                    </td>

                                    <td className='text-center w-32 py-2 border border-white'>
                                        <i className="fa-solid fa-pen-to-square cursor-pointer" onClick={() => { edit(item.id) }}></i>
                                        <i className="fa-solid fa-trash cursor-pointer ml-2" onClick={() => { deletePassword(item.id) }}></i>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>}
                </div>
            </div>
        </>
    )
}

export default Manager
