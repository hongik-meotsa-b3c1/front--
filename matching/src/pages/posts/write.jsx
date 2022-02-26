
// const Write = () => {
//   const [form, setForm] = useState({});
//   const navigate = useNavigate();

//   const onSubmit = async () => {
//     await post.write(
//       form.title,
//       form.content,
//       Number(form.numOfPeople),
//       form.date
//     );

//     navigate("/");
//   };

//   return (
//     <div>
//       <input
//         name="title"
//         placeholder="제목을 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         name="content"
//         placeholder="내용을 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         type="number"
//         name="numOfPeople"
//         placeholder="사람 수를 숫자로 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />
//       <input
//         type="date"
//         name="date"
//         placeholder="날짜를 입력하세요."
//         onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
//       />

//       <button onClick={onSubmit}>등록하기</button>
//     </div>
//   );
// };
