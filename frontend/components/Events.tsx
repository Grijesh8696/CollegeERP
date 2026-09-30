// export default function Events() {
//   const events = [
//     "AI Workshop",
//     "National Hackathon",
//     "Sports Week",
//     "Tech Fest",
//   ];

//   return (
//     <section className="py-16">
//       <div className="container mx-auto">

//         <h2 className="text-3xl font-bold mb-8">
//           Upcoming Events
//         </h2>

//         <div className="grid md:grid-cols-4 gap-6">

//           {events.map((event, index) => (
//             <div
//               key={index}
//               className="shadow-lg p-6 rounded-xl"
//             >
//               {event}
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }








export default function Events() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Upcoming Events
        </h2>

        <div className="border rounded-lg p-6 text-center">
          <p className="text-gray-600">
            No upcoming events at the moment.
          </p>
        </div>
      </div>
    </section>
  );
}
