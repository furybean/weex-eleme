default: help

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式: 可热更新"
	@echo "   \033[35mmake serve\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式：需要手动刷新"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  编译项目，生成目标文件"

install:
	@if [ ! -f "$$(which weex)" ]; then npm --registry=http://registry.npm.taobao.org install weex-toolkit -g; fi
	@npm i

dev: install
	@weex src/index.we

serve: install
	@npm run dev

dist:
	@npm run build