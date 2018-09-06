namespace :start do
  task :development do
    exec 'heroku local -f Procfile.dev'
  end
end

desc 'Start development server'
task :start => 'start:development'

# task :start do
#   exec 'foreman start -p 3000'
# end
