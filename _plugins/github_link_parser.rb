module Jekyll
    module GitHubLinkParserFilter
      def parse_github_link(input)
        if input =~ %r{https://github\.com/([^/]+)/([^/]+)}
          username = $1
          reponame = $2
          "#{username}/#{reponame}"
        else
          "Invalid GitHub link"
        end
      end
    end
  end

  Liquid::Template.register_filter(Jekyll::GitHubLinkParserFilter)
