import { Router } from "express"
import { createTask, getTasks, getUserTasks, updateTasks } from "../controllers/taskController"

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTasks)
router.get("/user/:userId", getUserTasks);

export default router;