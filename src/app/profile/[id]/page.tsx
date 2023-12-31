export default function ProfilePage({ params }: any) {
  return (
    <div className="flex flex-col item-center text-center object-center justify-center min-h-screen py-2">
      <h1 className="pb-8">Profile</h1>
      <hr />
      <p className="text-4xl">
        Profile page
        <span className="p-2 ml-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
} 
