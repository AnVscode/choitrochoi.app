import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type menuContent = {
  id: number;
  name: string;
  router: string;
}[];

export default function Header() {
  const user: string = "choitrochoi";
  const menuContent: menuContent = [
    {
      id: 1,
      name: "Đăng nhập",
      router: "",
    },
  ];

  return (
    <div className="container mb-2 p-4">
      <div className="flex justify-end">
        <HoverCard openDelay={1}>
          <HoverCardTrigger>
            <div className="flex cursor-pointer items-center gap-2">
              <div className="text-white">{user}</div>
              <Avatar>
                <AvatarImage src="https://placehold.co/400" />
                <AvatarFallback>avatar</AvatarFallback>
              </Avatar>
            </div>
          </HoverCardTrigger>

          {menuContent.map((item) => (
            <HoverCardContent
              className="cursor-pointer p-2"
              key={item.id}
              align="end"
              sideOffset={10}
            >
              <div className="rounded-sm p-2 hover:bg-slate-200">
                {item.name}
              </div>
            </HoverCardContent>
          ))}
        </HoverCard>
      </div>
    </div>
  );
}
