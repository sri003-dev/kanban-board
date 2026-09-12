export const dynamic = "force-dynamic";

// Your existing auth configuration code remains below...

import { auth } from "@/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

export const { GET, POST } = toNextJsHandler(auth);