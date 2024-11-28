import { Router } from "express"
import { createTask, getTasks, updateTasks } from "../controllers/taskController"

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTasks)

export default router;